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
      cam.position.z = 6.5;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(W, H);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      rendererRef.current = renderer;
      container.appendChild(renderer.domElement);

      // --- 2. Professional Typographic Rupee Symbol (₹) ---
      // Standard SVG Path: M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z
      const symbolShape = new THREE.Shape();
      const s = 0.14; // Reduced scale factor for a more elegant, centered look
      const sx = (v) => (v - 8) * s;
      const sy = (v) => (8 - v) * s;

      symbolShape.moveTo(sx(4), sy(3.06));
      symbolShape.lineTo(sx(6.726), sy(3.06));
      symbolShape.bezierCurveTo(sx(7.946), sy(3.06), sx(8.846), sy(3.635), sx(9.051), sy(4.784));
      symbolShape.lineTo(sx(4), sy(4.784));
      symbolShape.lineTo(sx(4), sy(5.835));
      symbolShape.lineTo(sx(9.051), sy(5.835));
      symbolShape.bezierCurveTo(sx(8.855), sy(7.001), sx(8), sy(7.558), sx(6.788), sy(7.558));
      symbolShape.lineTo(sx(4), sy(7.558));
      symbolShape.lineTo(sx(4), sy(8.875));
      symbolShape.lineTo(sx(8.437), sy(14));
      symbolShape.lineTo(sx(10.547), sy(14));
      symbolShape.lineTo(sx(6.095), sy(8.884));
      symbolShape.lineTo(sx(6.95), sy(8.884));
      symbolShape.bezierCurveTo(sx(9.266), sy(8.866), sx(10.415), sy(7.408), sx(10.638), sy(5.835));
      symbolShape.lineTo(sx(12), sy(5.835));
      symbolShape.lineTo(sx(12), sy(4.784));
      symbolShape.lineTo(sx(10.655), sy(4.784));
      symbolShape.bezierCurveTo(sx(10.575), sy(4.006), sx(10.298), sy(3.449), sx(9.862), sy(3.052));
      symbolShape.lineTo(sx(12), sy(3.052));
      symbolShape.lineTo(sx(12), sy(2));
      symbolShape.lineTo(sx(4), sy(2));
      symbolShape.closePath();

      const extrudeSettings = { 
        depth: 0.12, 
        bevelEnabled: true, 
        bevelThickness: 0.005, 
        bevelSize: 0.005, 
        bevelSegments: 4 
      };
      
      const symbolGeo = new THREE.ExtrudeGeometry(symbolShape, extrudeSettings);
      symbolGeo.center();

      // --- 3. Material Strategy: Polished vs Satin Contrast ---
      const polishedMat = new THREE.MeshPhysicalMaterial({ 
        color: 0xD4AF37, 
        metalness: 1.0, 
        roughness: 0.02, // Ultra polished
        clearcoat: 1.0,
        envMapIntensity: 2.5
      });

      const satinMat = new THREE.MeshPhysicalMaterial({ 
        color: 0xD4AF37, 
        metalness: 1.0, 
        roughness: 0.4, // Satin/Matte for contrast
        clearcoat: 0.2,
        envMapIntensity: 1.5
      });

      // --- 4. Build the Coin Group ---
      const coinGroup = new THREE.Group();
      scene.add(coinGroup);

      const bodyGeo = new THREE.CylinderGeometry(1.5, 1.5, 0.22, 256, 1);
      // Sides are polished, faces are satin
      const coinMesh = new THREE.Mesh(bodyGeo, [polishedMat, satinMat, satinMat]);
      coinMesh.rotation.x = Math.PI / 2;
      coinGroup.add(coinMesh);

      // Polished Bevel Rings
      const ringGeo = new THREE.TorusGeometry(1.44, 0.02, 16, 100);
      const ringFront = new THREE.Mesh(ringGeo, polishedMat);
      ringFront.position.z = 0.11;
      coinGroup.add(ringFront);
      const ringBack = ringFront.clone();
      ringBack.position.z = -0.11;
      coinGroup.add(ringBack);

      // Polished Physical Symbols (High Relief)
      const frontSymbol = new THREE.Mesh(symbolGeo, polishedMat);
      frontSymbol.position.z = 0.11;
      coinGroup.add(frontSymbol);

      const backSymbol = new THREE.Mesh(symbolGeo, polishedMat);
      backSymbol.position.z = -0.11;
      backSymbol.rotation.y = Math.PI; // Flip correctly
      coinGroup.add(backSymbol);

      // --- 6. Virtual Studio Environment ---
      const pmremGenerator = new THREE.PMREMGenerator(renderer);
      const envScene = new THREE.Scene();
      const whiteSoftbox = new THREE.Mesh(new THREE.PlaneGeometry(50, 50), new THREE.MeshBasicMaterial({ color: 0xffffff }));
      whiteSoftbox.position.set(0, 20, 15); whiteSoftbox.lookAt(0,0,0); envScene.add(whiteSoftbox);
      const goldSoftbox = new THREE.Mesh(new THREE.PlaneGeometry(50, 50), new THREE.MeshBasicMaterial({ color: 0xFFD700 }));
      goldSoftbox.position.set(20, -15, 10); goldSoftbox.lookAt(0,0,0); envScene.add(goldSoftbox);

      const envMap = pmremGenerator.fromScene(envScene).texture;
      scene.environment = envMap;

      scene.add(new THREE.AmbientLight(0xffffff, 0.5));
      const keyLight = new THREE.PointLight(0xffffff, 2.5);
      keyLight.position.set(5, 5, 10);
      scene.add(keyLight);

      // --- 7. Animation ---
      const animate = () => {
        if (!mounted) return;
        animRef.current = requestAnimationFrame(animate);
        coinGroup.rotation.y += 0.015; // Vertical flip spin
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
        bodyGeo.dispose(); symbolGeo.dispose(); ringGeo.dispose();
        goldMat.dispose(); faceMat.dispose(); faceTex.dispose();
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