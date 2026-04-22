import { useEffect, useRef } from 'react';

export default function RupeeCoin3D() {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    
    const init = () => {
      if (!mounted || !mountRef.current || !window.THREE) {
        if (!mounted) return;
        setTimeout(init, 100);
        return;
      }
      
      const THREE = window.THREE;
      const container = mountRef.current;
      while (container.firstChild) container.removeChild(container.firstChild);

      // --- 1. Scene & Setup ---
      const scene = new THREE.Scene();
      const W = container.clientWidth || 420;
      const H = container.clientHeight || 420;
      const cam = new THREE.PerspectiveCamera(30, W / H, 0.1, 100);
      cam.position.z = 4.8;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(W, H);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      rendererRef.current = renderer;
      container.appendChild(renderer.domElement);

      // --- 2. High-Res Canvas Textures (Smoother Embossing) ---
      const createCoinTexture = (isFlipped = false) => {
        const c = document.createElement('canvas');
        c.width = 1024; c.height = 1024;
        const ctx = c.getContext('2d');

        // Gold background
        ctx.fillStyle = '#D4AF37';
        ctx.fillRect(0, 0, 1024, 1024);

        // Subtle grooves - REMOVED for smoother surface around symbol
        /*
        ctx.strokeStyle = 'rgba(0,0,0,0.1)';
        ctx.lineWidth = 2;
        for (let r = 50; r < 512; r += 15) {
          ctx.beginPath(); ctx.arc(512, 512, r, 0, Math.PI * 2); ctx.stroke();
        }
        */

        // Draw "₹" symbol
        ctx.save();
        ctx.translate(512, 512);
        ctx.rotate(-Math.PI / 2);
        
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 500px "Arial", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Reduced shadow blur for cleaner bump mapping (less "grainy")
        ctx.shadowColor = 'rgba(0,0,0,0.4)';
        ctx.shadowBlur = 10;
        ctx.fillText('₹', 0, 0);
        ctx.restore();

        return c;
      };

      const frontCanvas = createCoinTexture(false);
      const backCanvas = createCoinTexture(true);

      const frontTex = new THREE.CanvasTexture(frontCanvas);
      const backTex = new THREE.CanvasTexture(backCanvas);
      
      // Max anisotropy for oblique smoothness
      frontTex.anisotropy = renderer.capabilities.getMaxAnisotropy();
      backTex.anisotropy = renderer.capabilities.getMaxAnisotropy();

      // --- 3. Premium Gold Material (MeshPhysicalMaterial for Glassy Smoothness) ---
      const commonProps = {
        metalness: 1.0,
        roughness: 0.05,
        clearcoat: 1.0,
        clearcoatRoughness: 0.03,
        bumpScale: 0.04, // Reduced scale for a more elegant, subtle embossing
      };

      const coinFaceMatFront = new THREE.MeshPhysicalMaterial({
        ...commonProps,
        map: frontTex,
        bumpMap: frontTex,
      });

      const coinFaceMatBack = new THREE.MeshPhysicalMaterial({
        ...commonProps,
        map: backTex,
        bumpMap: backTex,
      });

      const coinEdgeMat = new THREE.MeshPhysicalMaterial({
        color: 0xD4AF37,
        metalness: 1.0,
        roughness: 0.03,
        clearcoat: 1.0,
      });

      // --- 4. Build the Coin Group (Higher Segments for Smooth Edges) ---
      const coinGroup = new THREE.Group();
      scene.add(coinGroup);

      const coinGeo = new THREE.CylinderGeometry(1.5, 1.5, 0.22, 256, 1);
      const coinMesh = new THREE.Mesh(coinGeo, [
        coinEdgeMat,      // Side
        coinFaceMatFront, // Top (Front)
        coinFaceMatBack,  // Bottom (Back)
      ]);
      
      coinMesh.rotation.x = Math.PI / 2;
      coinGroup.add(coinMesh);

      // --- 5. Virtual Studio Environment ---
      const pmremGenerator = new THREE.PMREMGenerator(renderer);
      const envScene = new THREE.Scene();
      const whiteLight = new THREE.Mesh(new THREE.PlaneGeometry(50, 50), new THREE.MeshBasicMaterial({ color: 0xffffff }));
      whiteLight.position.set(0, 20, 15); whiteLight.lookAt(0,0,0); envScene.add(whiteLight);
      
      const yellowLight = new THREE.Mesh(new THREE.PlaneGeometry(50, 50), new THREE.MeshBasicMaterial({ color: 0xFFD700 }));
      yellowLight.position.set(15, -15, 10); yellowLight.lookAt(0,0,0); envScene.add(yellowLight);

      const envMap = pmremGenerator.fromScene(envScene).texture;
      scene.environment = envMap;

      scene.add(new THREE.AmbientLight(0xffffff, 0.5));
      const keyLight = new THREE.PointLight(0xffffff, 2.5);
      keyLight.position.set(5, 5, 10);
      scene.add(keyLight);

      // --- 6. Animation ---
      const animate = () => {
        if (!mounted) return;
        animRef.current = requestAnimationFrame(animate);
        
        coinGroup.rotation.y += 0.015;
        
        const t = Date.now() * 0.001;
        coinGroup.rotation.x = Math.sin(t * 0.7) * 0.15;
        
        renderer.render(scene, cam);
      };
      animate();

      const onResize = () => {
        if (!mountRef.current || !renderer || !cam) return;
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        cam.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
        cam.updateProjectionMatrix();
      };
      window.addEventListener('resize', onResize);

      return () => {
        window.removeEventListener('resize', onResize);
        coinGeo.dispose();
        coinFaceMatFront.dispose(); coinFaceMatBack.dispose(); coinEdgeMat.dispose();
        frontTex.dispose(); backTex.dispose();
        pmremGenerator.dispose(); envMap.dispose();
        renderer.dispose();
      };
    };
    
    init();

    return () => {
      mounted = false;
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.5))'
      }}
    />
  );
}