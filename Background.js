const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.setPixelRatio(window.devicePixelRatio);

renderer.domElement.id = "bg";

document.body.prepend(renderer.domElement);

camera.position.z = 5;

const particlesGeometry = new THREE.BufferGeometry();

const count = 2500;

const positions = [];

for(let i=0;i<count;i++){

    positions.push((Math.random()-0.5)*30);

    positions.push((Math.random()-0.5)*30);

    positions.push((Math.random()-0.5)*30);

}

particlesGeometry.setAttribute(

    "position",

    new THREE.Float32BufferAttribute(positions,3)

);

const particlesMaterial = new THREE.PointsMaterial({

    color:0x8b5cf6,

    size:0.03

});

const particles = new THREE.Points(

    particlesGeometry,

    particlesMaterial

);

scene.add(particles);

function animate(){

    requestAnimationFrame(animate);

    particles.rotation.y +=0.0008;

    particles.rotation.x +=0.0003;

    renderer.render(scene,camera);

}

animate();

window.addEventListener("resize",()=>{

    camera.aspect=window.innerWidth/window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(

        window.innerWidth,

        window.innerHeight

    );

});

