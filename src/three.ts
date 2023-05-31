import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export function setupThree(canvas: HTMLCanvasElement) {
    console.log("Guten Tag");

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera (
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    )
    camera.position.z = 3;
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)
    canvas.appendChild(renderer.domElement)
    
    // https://threejs.org/docs/#examples/en/controls/ArcballControls
    // https://threejs.org/docs/#examples/en/controls/OrbitControls
    // https://threejs.org/docs/#examples/en/controls/TrackballControls
    const controls = new OrbitControls(camera, renderer.domElement)

    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        wireframe: true
    })

    const cube = new THREE.Mesh(geometry, material)

    const axes = new THREE.AxesHelper(10)

    scene.add(cube)
    scene.add(axes)

    let rotation_speed = 0.01

    function render() {
        renderer.render(scene, camera)
    }
    function animate() {
        window.requestAnimationFrame(animate)

        //cube.rotation.x += 0.1
        cube.rotation.y += rotation_speed

        controls.update()
        
        render()
    }

    animate()
}
  