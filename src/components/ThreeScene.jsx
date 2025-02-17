import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const mount = mountRef.current;

    // ✅ 1. Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    // ✅ 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 4;

    // ✅ 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // ✅ 4. HDRI Environment
    const rgbeLoader = new RGBELoader();
    rgbeLoader.setDataType(THREE.FloatType).load(
      "https://threejs.org/examples/textures/equirectangular/venice_sunset_1k.hdr",
      (texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture;
      },
      undefined,
      (error) => console.error("❌ Failed to load HDRI texture:", error)
    );

    // ✅ 5. Load Font & Create 3D Text
    const fontLoader = new FontLoader();
    const fontURL =
      "https://file-hq0e.onrender.com/uploads/1738762613338-BaksodaDemo_Regular.json";

    const textGroup = new THREE.Group();
    scene.add(textGroup);

    fontLoader.load(fontURL, (font) => {
      console.log("✅ Font Loaded Successfully:", font);

      const textGeometry = new TextGeometry("Alvis Moltz", {
        font: font,
        size: 0.8,
        depth: 0.2,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.04,
        bevelSize: 0.02,
        bevelSegments: 10,
      });

      const textMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color(0x090909),
        metalness: 0.8,
        roughness: 0.3,
      });

      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textMesh.position.set(-2.5, 0, 0);
      textMesh.castShadow = true;

      textGroup.add(textMesh);
    });

    // ✅ 6. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.position.set(15, 20, 10);
    spotLight.castShadow = true;
    scene.add(spotLight);

    // ✅ 7. Handle Window Resizing
    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // ✅ 8. Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      textGroup.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // ✅ 9. Cleanup Function
    return () => {
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "400px" }} />;
};

export default ThreeScene;
