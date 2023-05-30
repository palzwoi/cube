import * as THREE from 'three';

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

    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: true
    })

    const cube = new THREE.Mesh(geometry, material)

    scene.add(cube)

    let rotation_speed = 0.01

    function render() {
        renderer.render(scene, camera)
    }
    function animate() {
        window.requestAnimationFrame(animate)

        //cube.rotation.x += 0.1
        cube.rotation.y += rotation_speed

        //HTMLFormControlsCollection.up
        render()
    }

    animate()
}
  