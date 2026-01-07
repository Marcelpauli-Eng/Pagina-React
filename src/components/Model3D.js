import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import './Model3D.css';

// Modelo 3D de La Torrassa del Moro basado en la torre real
function TorrassaMoro({ autoRotate }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Base inferior - piedras grandes rectangulares grises (tercio inferior) */}
      {/* La base toca el suelo en y = -1.5, así que su centro está en -1.5 + altura/2 */}
      <mesh position={[0, -0.75, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.8, 1.9, 1.5, 16]} />
        <meshStandardMaterial color="#a0a0a0" roughness={0.9} metalness={0.1} />
      </mesh>
      
      {/* Detalles de piedras grandes rectangulares en la base */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        return (
          <mesh 
            key={i}
            position={[Math.cos(angle) * 1.82, -0.75, Math.sin(angle) * 1.82]} 
            rotation={[0, angle, 0]}
            castShadow
          >
            <boxGeometry args={[0.3, 1.5, 0.15]} />
            <meshStandardMaterial color="#b0b0b0" roughness={0.85} />
          </mesh>
        );
      })}
      
      {/* Cuerpo superior - piedras pequeñas irregulares marrones/grises (dos tercios superiores) */}
      <mesh position={[0, 0.7, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.7, 1.8, 3, 16]} />
        <meshStandardMaterial color="#8b7a6a" roughness={0.92} metalness={0.08} />
      </mesh>
      
      {/* Textura de piedras irregulares en la parte superior */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i / 24) * Math.PI * 2;
        const height = -0.3 + (i % 3) * 0.8;
        const size = 0.12 + Math.random() * 0.08;
        return (
          <mesh 
            key={i}
            position={[Math.cos(angle) * 1.72, height, Math.sin(angle) * 1.72]} 
            rotation={[Math.random() * 0.3, angle, Math.random() * 0.3]}
            castShadow
          >
            <boxGeometry args={[size, size * 0.7, size * 0.5]} />
            <meshStandardMaterial 
              color={i % 3 === 0 ? "#7a6b5a" : i % 3 === 1 ? "#9a8a7a" : "#6b5d4f"} 
              roughness={0.95} 
            />
          </mesh>
        );
      })}
      
      {/* Ventanas rectangulares con marcos rojizos/marrones */}
      {[0, 1.3].map((y, i) => (
        <group key={i}>
          {/* Ventana frontal */}
          <mesh position={[0, y, 1.72]} castShadow>
            <boxGeometry args={[0.5, 0.7, 0.1]} />
            <meshStandardMaterial color="#1a0f08" roughness={1} />
          </mesh>
          {/* Marco de ventana rojizo/marrón */}
          <mesh position={[0, y, 1.73]} castShadow>
            <boxGeometry args={[0.6, 0.8, 0.12]} />
            <meshStandardMaterial color="#8b5a3c" roughness={0.9} />
          </mesh>
        </group>
      ))}
      
      {/* Ventana lateral (parcialmente visible) */}
      <group position={[-1.72, 2.1, 0]}>
        <mesh castShadow>
          <boxGeometry args={[0.1, 0.6, 0.5]} />
          <meshStandardMaterial color="#1a0f08" roughness={1} />
        </mesh>
        <mesh position={[0, 0, 0]} castShadow>
          <boxGeometry args={[0.12, 0.7, 0.6]} />
          <meshStandardMaterial color="#8b5a3c" roughness={0.9} />
        </mesh>
      </group>
      
      {/* Corona superior simple - sin almenas, más lisa */}
      <mesh position={[0, 2.3, 0]} castShadow>
        <cylinderGeometry args={[1.75, 1.7, 0.2, 16]} />
        <meshStandardMaterial color="#7a6b5a" roughness={0.9} />
      </mesh>
      
      {/* Techo plano superior */}
      <mesh position={[0, 2.5, 0]} castShadow>
        <cylinderGeometry args={[1.7, 1.7, 0.1, 16]} />
        <meshStandardMaterial color="#6b5d4f" roughness={0.95} />
      </mesh>
    </group>
  );
}

// Componente de montañas de fondo y árboles
function Mountains() {
  return (
    <group>
      {/* Montañas distantes - azuladas en el horizonte */}
      <mesh position={[-10, -1, -20]} rotation={[0, 0.2, 0]} receiveShadow>
        <coneGeometry args={[5, 6, 8]} />
        <meshStandardMaterial color="#7a8a9a" roughness={0.9} />
      </mesh>
      
      <mesh position={[0, -1, -22]} receiveShadow>
        <coneGeometry args={[6, 7, 8]} />
        <meshStandardMaterial color="#6b7a8a" roughness={0.9} />
      </mesh>
      
      <mesh position={[10, -1, -20]} rotation={[0, -0.2, 0]} receiveShadow>
        <coneGeometry args={[5.5, 6.5, 8]} />
        <meshStandardMaterial color="#7a8a9a" roughness={0.9} />
      </mesh>
      
      {/* Árboles alrededor */}
      {/* Pino grande a la derecha */}
      <group position={[6, -1, -8]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.3, 0.3, 3, 8]} />
          <meshStandardMaterial color="#5a4a3a" roughness={0.9} />
        </mesh>
        <mesh position={[0, 2, 0]} castShadow>
          <coneGeometry args={[2, 3, 8]} />
          <meshStandardMaterial color="#2d4a2d" roughness={0.8} />
        </mesh>
      </group>
      
      {/* Árboles más pequeños */}
      <group position={[-5, -1, -10]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.2, 0.2, 2, 8]} />
          <meshStandardMaterial color="#4a3a2a" roughness={0.9} />
        </mesh>
        <mesh position={[0, 1.5, 0]} castShadow>
          <coneGeometry args={[1.5, 2, 6]} />
          <meshStandardMaterial color="#3d5a3d" roughness={0.8} />
        </mesh>
      </group>
      
      {/* Suelo de tierra/grava clara */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, -10]} receiveShadow>
        <planeGeometry args={[40, 30]} />
        <meshStandardMaterial color="#d4c4a4" roughness={0.95} />
      </mesh>
      
      {/* Parches de hierba cerca de la torre */}
      {[-2, 0, 2].map((x, i) => (
        <mesh 
          key={i}
          rotation={[-Math.PI / 2, 0, 0]} 
          position={[x, -1.48, 0]} 
          receiveShadow
        >
          <planeGeometry args={[1, 1]} />
          <meshStandardMaterial color="#7a9a6a" roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
}

// Componente para cargar modelo GLTF/GLB externo
function LoadedModel({ url, autoRotate }) {
  const { scene } = useGLTF(url);
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (autoRotate && meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <primitive 
      object={scene} 
      ref={meshRef}
      scale={1}
      position={[0, 0, 0]}
    />
  );
}

const Model3D = () => {
  const [autoRotate, setAutoRotate] = useState(true);
  const [useCustomModel, setUseCustomModel] = useState(false);
  
  // Si tienes un modelo GLB/GLTF, colócalo en /public/multimedia/models/tower.glb
  // y cambia useCustomModel a true
  const modelUrl = '/multimedia/models/tower.glb';

  return (
    <section id="model3d" className="model3d-section">
      <h2 className="section-title slide-up">La Torrassa del Moro</h2>
      <p className="section-subtitle slide-up">
        Explora la torre de defensa d'origen romà en 3D. Gira el model amb el ratolí per veure-la des de tots els angles.
      </p>
      
      <div className="model3d-container fade-in">
        <div className="model3d-controls">
          <button 
            className={`control-btn ${autoRotate ? 'active' : ''}`}
            onClick={() => setAutoRotate(!autoRotate)}
          >
            {autoRotate ? '⏸ Pausar Rotació' : '▶ Activar Rotació'}
          </button>
        </div>
        
        <div className="model3d-canvas-wrapper">
          <Canvas
            camera={{ position: [0, 2, 8], fov: 55 }}
            shadows
            gl={{ antialias: true }}
          >
            {/* Iluminación mejorada */}
            <ambientLight intensity={0.6} />
            <directionalLight 
              position={[10, 12, 8]} 
              intensity={1.5}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
            />
            <directionalLight 
              position={[-5, 8, -5]} 
              intensity={0.4}
              color="#a0b0c0"
            />
            <pointLight position={[0, 5, 0]} intensity={0.3} color="#fff8e0" />
            
            {/* Fondo de montañas */}
            <Mountains />
            
            {/* Torre */}
            {useCustomModel ? (
              <LoadedModel url={modelUrl} autoRotate={autoRotate} />
            ) : (
              <TorrassaMoro autoRotate={autoRotate} />
            )}
            
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              minDistance={4}
              maxDistance={15}
              autoRotate={false}
              autoRotateSpeed={0.5}
            />
            
            <Environment preset="sunset" />
            
            {/* Suelo cerca de la torre */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
              <planeGeometry args={[8, 8]} />
              <meshStandardMaterial color="#d4c4a4" roughness={0.9} />
            </mesh>
            
            {/* Cielo/atmosfera */}
            <fog attach="fog" args={['#d0d8e0', 10, 30]} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Model3D;

