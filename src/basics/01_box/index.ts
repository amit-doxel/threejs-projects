import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three';

const geometry = new BoxGeometry();
const material = new MeshBasicMaterial({ color: 0xd19ce5 });
const mesh = new Mesh(geometry, material);

const animateMesh = () => {
  mesh.rotateX(0.01);
  mesh.rotateY(0.01);
};

export {
  mesh,
  animateMesh,
};
