'use client';

import { useEffect, useRef } from 'react';

export default function Globe() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let renderer: any, camera: any, scene: any, controls: any, globe: any;
    let frameId: number;

    const init = async () => {
      try {
        const THREE = await import('three');
        const ThreeGlobe = (await import('three-globe')).default;
        const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls.js');

        const container = containerRef.current;
        if (!container) return;

        const width = container.offsetWidth;
        const height = container.offsetHeight;

        // Scene
        scene = new THREE.Scene();

        // Camera - Adjusted for complete globe view
        camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
        camera.position.z = 300;

        // Renderer
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);
        renderer.setClearColor(0x000000, 0);
        renderer.domElement.style.cursor = 'grab';
        container.appendChild(renderer.domElement);

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);

        // Arc data for connections
        const arcsData = [
          { startLat: 20.5937, startLng: 78.9629, endLat: 37.0902, endLng: -95.7129 }, // India -> USA
          { startLat: 37.0902, startLng: -95.7129, endLat: 51.5074, endLng: -0.1278 }, // USA -> UK
          { startLat: 51.5074, startLng: -0.1278, endLat: -25.2744, endLng: 133.7751 }, // UK -> Australia
        ];

        // Add location markers
        const markers = [
          { lat: 20.5937, lng: 78.9629, size: 0.8, color: '#60a5fa' }, // India
          { lat: 37.0902, lng: -95.7129, size: 0.6, color: '#60a5fa' }, // USA
          { lat: 51.5074, lng: -0.1278, size: 0.6, color: '#60a5fa' }, // UK
          { lat: -25.2744, lng: 133.7751, size: 0.6, color: '#60a5fa' }, // Australia
        ];

        // Fetch countries data for hex polygons (with error handling)
        let countries;
        try {
          const response = await fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson');
          countries = await response.json();
        } catch (error) {
          console.warn('Failed to load countries data, using markers only');
          countries = { features: [] };
        }

        // Create Globe with hex polygons forming dotted continents
        globe = new ThreeGlobe()
          .showGlobe(false)
          .showAtmosphere(true)
          .atmosphereColor('#3b82f6')
          .atmosphereAltitude(0.25)
          .hexPolygonsData(countries.features)
          .hexPolygonResolution(3)
          .hexPolygonMargin(0.62)
          .hexPolygonUseDots(true)
          .hexPolygonColor(() => '#4a9eff')
          .hexPolygonAltitude(0.001)
          .pointsData(markers)
          .pointColor('color')
          .pointAltitude(0.01)
          .pointRadius('size')
          .arcsData(arcsData)
          .arcColor(() => '#60a5fa')
          .arcDashLength(0.4)
          .arcDashGap(0.2)
          .arcDashAnimateTime(3000)
          .arcStroke(0.5)
          .arcAltitude(0.3);

        scene.add(globe);

        // Controls - enable rotation with mouse, NO auto-rotate
        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.enableRotate = true;
        controls.rotateSpeed = 0.8;
        controls.autoRotate = false;
        controls.minDistance = 200;
        controls.maxDistance = 300;

        // Change cursor on drag
        controls.addEventListener('start', () => {
          renderer.domElement.style.cursor = 'grabbing';
        });
        controls.addEventListener('end', () => {
          renderer.domElement.style.cursor = 'grab';
        });

        // Resize handler
        const handleResize = () => {
          if (!containerRef.current) return;
          const w = containerRef.current.offsetWidth;
          const h = containerRef.current.offsetHeight;
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        };
        window.addEventListener('resize', handleResize);

        // Animation loop
        const animate = () => {
          controls.update();
          renderer.render(scene, camera);
          frameId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      } catch (error) {
        console.error('Error initializing globe:', error);
      }
    };

    init();

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      if (renderer && containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
        renderer.dispose();
      }
      if (controls) controls.dispose();
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
}
