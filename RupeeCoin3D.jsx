import { useEffect, useRef } from 'react';

export default function RupeeCoin3D() {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    
    const init = () => {
      if (!mounted) return;
      
      // Wait for THREE to be available
      if (!window.THREE || !mountRef.current) {
        setTimeout(init, 100);
        return;
      }
      
      const THREE = window.THREE;
      const container = mountRef.current;
      
      // Clear any existing content
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }

      // Scene
      const scene = new THREE.Scene();
      const W = 420, H = 420;
      const cam = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
      cam.position.z = 3.8;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(W, H);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      rendererRef.current = renderer;
      container.appendChild(renderer.domElement);

      // Face texture
      const fc = document.createElement('canvas');
      fc.width = 512; fc.height = 512;
      const fctx = fc.getContext('2d');
      
      // Gold radial gradient
      const grad = fctx.createRadialGradient(256, 256, 20, 256, 256, 256);
      grad.addColorStop(0, '#F5D060');
      grad.addColorStop(0.45, '#D4AF37');
      grad.addColorStop(0.75, '#C09A25');
      grad.addColorStop(1, '#8B6914');
      fctx.fillStyle = grad;
      fctx.beginPath();
      fctx.arc(256, 256, 256, 0, Math.PI * 2);
      fctx.fill();
      
      // Outer ring
      fctx.beginPath();
      fctx.arc(256, 256, 235, 0, Math.PI * 2);
      fctx.strokeStyle = 'rgba(255,215,0,0.6)';
      fctx.lineWidth = 8;
      fctx.stroke();
      
      // Inner ring
      fctx.beginPath();
      fctx.arc(256, 256, 215, 0, Math.PI * 2);
      fctx.strokeStyle = 'rgba(139,105,20,0.4)';
      fctx.lineWidth = 3;
      fctx.stroke();
      
      // Arc text - HELPLINE FINANCE
      fctx.save();
      fctx.translate(256, 256);
      fctx.font = 'bold 22px "Plus Jakarta Sans", sans-serif';
      fctx.fillStyle = '#1B3A6B';
      fctx.textAlign = 'center';
      const topText = 'HELPLINE FINANCE';
      const topR = 185;
      const topStart = -Math.PI * 0.65;
      const topSpan = Math.PI * 1.3;
      for (let i = 0; i < topText.length; i++) {
        const angle = topStart + (topSpan / (topText.length - 1)) * i;
        fctx.save();
        fctx.rotate(angle + Math.PI / 2);
        fctx.fillText(topText[i], 0, -topR);
        fctx.restore();
      }
      
      // Bottom text
      const btmText = '★ SINCE 2017 ★';
      const btmR = 178;
      const btmStart = Math.PI * 0.74;
      const btmSpan = Math.PI * 0.56;
      for (let i = 0; i < btmText.length; i++) {
        const angle = btmStart + (btmSpan / (btmText.length - 1)) * i;
        fctx.save();
        fctx.rotate(angle - Math.PI / 2);
        fctx.fillText(btmText[i], 0, btmR);
        fctx.restore();
      }
      fctx.restore();
      
      // ₹ symbol
      fctx.font = 'bold 200px "Playfair Display", serif';
      fctx.fillStyle = '#0C2340';
      fctx.textAlign = 'center';
      fctx.textBaseline = 'middle';
      fctx.fillText('₹', 256, 262);
      
      // Glow behind symbol
      const glow = fctx.createRadialGradient(256, 256, 10, 256, 256, 90);
      glow.addColorStop(0, 'rgba(240,200,74,0.25)');
      glow.addColorStop(1, 'rgba(240,200,74,0)');
      fctx.fillStyle = glow;
      fctx.beginPath();
      fctx.arc(256, 256, 90, 0, Math.PI * 2);
      fctx.fill();

      // Edge texture
      const ec = document.createElement('canvas');
      ec.width = 512; ec.height = 64;
      const ectx = ec.getContext('2d');
      const egrad = ectx.createLinearGradient(0, 0, 512, 0);
      egrad.addColorStop(0, '#8B6914');
      egrad.addColorStop(0.25, '#D4AF37');
      egrad.addColorStop(0.5, '#F5D060');
      egrad.addColorStop(0.75, '#D4AF37');
      egrad.addColorStop(1, '#8B6914');
      ectx.fillStyle = egrad;
      ectx.fillRect(0, 0, 512, 64);
      
      // Edge grooves
      for (let i = 0; i < 36; i++) {
        const x = (i / 36) * 512;
        ectx.fillStyle = 'rgba(0,0,0,0.12)';
        ectx.fillRect(x, 0, 3, 64);
      }

      const faceTex = new THREE.CanvasTexture(fc);
      const edgeTex = new THREE.CanvasTexture(ec);
      const geo = new THREE.CylinderGeometry(1.2, 1.2, 0.18, 64);

      const materials = [
        new THREE.MeshStandardMaterial({ map: edgeTex, metalness: 0.95, roughness: 0.05 }),
        new THREE.MeshStandardMaterial({ map: faceTex, metalness: 0.88, roughness: 0.08 }),
        new THREE.MeshStandardMaterial({ map: faceTex, metalness: 0.88, roughness: 0.08 }),
      ];

      const coin = new THREE.Mesh(geo, materials);
      coin.rotation.x = Math.PI / 2;
      scene.add(coin);

      // Lights
      const ambLight = new THREE.AmbientLight(0xffffff, 0.55);
      scene.add(ambLight);
      const keyLight = new THREE.PointLight(0xFFD700, 3.5, 20);
      keyLight.position.set(3, 4, 5);
      scene.add(keyLight);
      const fillLight = new THREE.PointLight(0xffffff, 1.4, 18);
      fillLight.position.set(-3, 1, 4);
      scene.add(fillLight);
      const rimLight = new THREE.PointLight(0xCD7F32, 1.8, 14);
      rimLight.position.set(0, -3, -3);
      scene.add(rimLight);
      const topLight = new THREE.PointLight(0x87CEEB, 1.0, 15);
      topLight.position.set(0, 5, 2);
      scene.add(topLight);

      // Particles
      const pgeo = new THREE.BufferGeometry();
      const ppos = new Float32Array(300 * 3);
      for (let i = 0; i < 300; i++) {
        const r = 1.8 + Math.random() * 0.8;
        const theta = Math.random() * Math.PI * 2;
        const phi = (Math.random() - 0.5) * Math.PI * 0.6;
        ppos[i * 3] = r * Math.cos(theta) * Math.cos(phi);
        ppos[i * 3 + 1] = r * Math.sin(phi);
        ppos[i * 3 + 2] = r * Math.sin(theta) * Math.cos(phi);
      }
      pgeo.setAttribute('position', new THREE.BufferAttribute(ppos, 3));
      const particles = new THREE.Points(pgeo, new THREE.PointsMaterial({ color: 0xFFD700, size: 0.012, transparent: true, opacity: 0.5 }));
      scene.add(particles);

      let t = 0;
      function animate() {
        if (!mounted) return;
        animRef.current = requestAnimationFrame(animate);
        t += 0.015;
        coin.rotation.z += 0.006;
        coin.position.x = Math.sin(t * 0.7) * 0.09;
        particles.rotation.x += 0.003;
        keyLight.position.y = Math.cos(t * 0.3) * 3.5;
        keyLight.position.z = Math.sin(t * 0.3) * 4.5;
        renderer.render(scene, cam);
      }
      animate();
    };
    
    init();

    return () => {
      mounted = false;
      if (animRef.current) cancelAnimationFrame(animRef.current);
      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (rendererRef.current.domElement && rendererRef.current.domElement.parentNode) {
          rendererRef.current.domElement.parentNode.removeChild(rendererRef.current.domElement);
        }
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-label="Animated gold Indian Rupee coin"
      role="img"
      style={{
        width: 420,
        height: 420,
        filter: 'drop-shadow(0 20px 60px rgba(212,175,55,0.4)) drop-shadow(0 4px 20px rgba(0,0,0,0.3))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}
    />
  );
}