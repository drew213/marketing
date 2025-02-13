import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene Setup
    const scene = new THREE.Scene();

    // Set background color
    scene.background = new THREE.Color(0xFFFFFF); // Dark gray background

    // Camera Setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 10;

    // Renderer Setup
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Torus Knot Shape
    const geometry = new THREE.TorusKnotGeometry(3, 0.8, 100, 16);
    const material = new THREE.MeshStandardMaterial({
      color: 0x0077ff,
      metalness: 0.6, // Add metallic effect
      roughness: 0.2, // Add roughness for better realism
    });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft light
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.position.set(15, 20, 10);
    spotLight.castShadow = true;
    scene.add(spotLight);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      torusKnot.rotation.x += 0.01;
      torusKnot.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Clean up
    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "400px" }} />;
};

export default ThreeScene;
