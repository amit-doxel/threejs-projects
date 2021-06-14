import { DoubleSide, Mesh, MeshBasicMaterial, PlaneGeometry } from 'three';

const width = 20;

// street
const geometry = new PlaneGeometry(width, 4);
const material = new MeshBasicMaterial({ color: 0xffffff, side: DoubleSide });
const mesh = new Mesh(geometry, material);

export { mesh };
