import  * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);


const directionalLight = new THREE.DirectionalLight(0xffffff, 0.50);
directionalLight.position.set(1, 1, 1).normalize();
directionalLight.target.position.set(0, 0, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.50);
directionalLight2.position.set(0, 0, 1).normalize();
directionalLight2.target.position.set(0, 0, 0);
scene.add(directionalLight2);
scene.add(directionalLight2.target);

// Crée une instance de TextureLoader pour charger l'image
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('../src/3d/Pomodoro_low_propre.png');//../src/3d/Pomodoro_low_DefaultMaterial_BaseColor.png

let pomodoro; // Déclare l'objet à ce niveau pour le rendre accessible partout dans le code

const fbxLoader = new FBXLoader();
fbxLoader.load(
    '../src/3d/Pomodoro_low.fbx',
    (loadedObject) => {
        pomodoro = loadedObject;
        pomodoro.scale.set(.01, .01, .01);

        pomodoro.traverse((child) => {
            if (child.isMesh) {
                // Applique la texture à chaque matériau
                child.material.map = texture;
            }
        });

        pomodoro.rotation.y = 4.7;

        scene.add(pomodoro);
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    (error) => {
        console.log(error)
    }
)


camera.position.z = 5;
// camera.position.y = -1;

let speedX = 0;
let speedY = 0.00065;
let speedCam = 0;

setTimeout(()=> document.getElementById('title').addEventListener('click',()=>{
    speedX = 0.065;
    speedY = 0.065;
    speedCam = 0.05;
}),5000);

function animate() {

    requestAnimationFrame( animate );

    if (pomodoro) {

        pomodoro.rotation.y -= speedY;
        pomodoro.rotation.x -= speedX;
        camera.rotation.y -= speedCam;
    }


    renderer.render( scene, camera );
}

animate();

document.body.appendChild( renderer.domElement );