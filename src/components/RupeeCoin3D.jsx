import { useEffect, useRef } from 'react';

export default function RupeeCoin3D() {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    let scene, cam, renderer, coin;
    let geo, ringGeo, materials, ringMat, symbolTex;
    let symbolFront, symbolBack, fShadow, bShadow;

    const start = () => {
      if (!mounted || !mountRef.current || !window.THREE) return;

      const THREE = window.THREE;
      const container = mountRef.current;
      
      const W = container.clientWidth || 400;
      const H = container.clientHeight || 400;

      scene = new THREE.Scene();
      cam = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
      cam.position.z = 5;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(W, H);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      rendererRef.current = renderer;
      container.appendChild(renderer.domElement);

      const goldMat = new THREE.MeshStandardMaterial({ 
        color: 0xD4AF37, 
        metalness: 0.9, 
        roughness: 0.1 
      });

      // Bigger Coin Geometry
      geo = new THREE.CylinderGeometry(1.8, 1.8, 0.25, 64);
      coin = new THREE.Mesh(geo, goldMat);
      coin.rotation.x = Math.PI / 2;
      scene.add(coin);

      // Inner rings for physical depth
      ringGeo = new THREE.CylinderGeometry(1.4, 1.4, 0.05, 64);
      ringMat = new THREE.MeshStandardMaterial({ color: 0xb8860b, metalness: 0.8, roughness: 0.2 });
      const r1 = new THREE.Mesh(ringGeo, ringMat);
      r1.position.y = 0.126;
      coin.add(r1);
      const r2 = new THREE.Mesh(ringGeo, ringMat);
      r2.position.y = -0.126;
      coin.add(r2);

      // Single non-mirrored high-res symbol
      const createSymbolCanvas = () => {
        const c = document.createElement('canvas');
        c.width = 512; c.height = 512;
        const ctx = c.getContext('2d');
        ctx.font = 'bold 420px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#fac801';
        ctx.fillText('₹', 256, 256);
        return c;
      };

      symbolTex = new THREE.CanvasTexture(createSymbolCanvas());
      symbolTex.anisotropy = 4;
      
      const symbolPlaneGeo = new THREE.PlaneGeometry(2.0, 2.0);
      const symbolMat = new THREE.MeshStandardMaterial({ 
        map: symbolTex, 
        transparent: true, 
        metalness: 0.95, 
        roughness: 0.05 
      });

      // Shadow Material for 'extruded' effect
      const symbolShadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.5, map: symbolTex });

      // Front
      fShadow = new THREE.Mesh(symbolPlaneGeo, symbolShadowMat);
      fShadow.position.set(0.03, 0.155, 0.03); // Offset for physical depth look
      fShadow.rotation.x = -Math.PI / 2;
      coin.add(fShadow);

      symbolFront = new THREE.Mesh(symbolPlaneGeo, symbolMat);
      symbolFront.position.y = 0.16;
      symbolFront.rotation.x = -Math.PI / 2;
      coin.add(symbolFront);

      // Back - Properly fixed inversion using scale.x = -1
      bShadow = new THREE.Mesh(symbolPlaneGeo, symbolShadowMat);
      bShadow.position.set(0.03, -0.155, 0.03);
      bShadow.rotation.x = Math.PI / 2;
      bShadow.scale.x = -1; // Mirror un-inverts
      coin.add(bShadow);

      symbolBack = new THREE.Mesh(symbolPlaneGeo, symbolMat);
      symbolBack.position.y = -0.16;
      symbolBack.rotation.x = Math.PI / 2;
      symbolBack.scale.x = -1; // Mirror un-inverts
      coin.add(symbolBack);

      scene.add(new THREE.AmbientLight(0xffffff, 0.7));
      const dl = new THREE.DirectionalLight(0xffffff, 1.8);
      dl.position.set(10, 10, 10);
      scene.add(dl);

      const onResize = () => {
        if (!mountRef.current || !renderer || !cam) return;
        const nW = mountRef.current.clientWidth;
        const nH = mountRef.current.clientHeight;
        renderer.setSize(nW, nH);
        cam.aspect = nW / nH;
        cam.updateProjectionMatrix();
      };
      window.addEventListener('resize', onResize);

      const animate = () => {
        if (!mounted) return;
        animRef.current = requestAnimationFrame(animate);
        coin.rotation.z += 0.008;
        renderer.render(scene, cam);
      };
      animate();

      return () => {
        window.removeEventListener('resize', onResize);
        // Resource Cleanup
        geo.dispose();
        ringGeo.dispose();
        symbolPlaneGeo.dispose();
        goldMat.dispose();
        ringMat.dispose();
        symbolMat.dispose();
        symbolShadowMat.dispose();
        symbolTex.dispose();
        renderer.dispose();
      };
    };

    const timer = setTimeout(start, 50);

    return () => {
      mounted = false;
      clearTimeout(timer);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    />
  );
}