import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// Merge the direct child meshes of `group` that share a material into single meshes.
// Children in `keep` (or with userData.keep) are left alone (animated parts).
export function mergeStatic(group, keep = []) {
  const buckets = new Map();
  for (const ch of [...group.children]) {
    if (!ch.isMesh || keep.includes(ch) || ch.userData.keep || ch.isInstancedMesh || ch.children.length) continue;
    const mats = Array.isArray(ch.material) ? null : ch.material;
    if (!mats) continue;
    if (!buckets.has(mats)) buckets.set(mats, []);
    buckets.get(mats).push(ch);
  }
  for (const [mat, list] of buckets) {
    if (list.length < 2) continue;
    const geos = [];
    for (const m of list) {
      m.updateMatrix();
      let g = m.geometry.index ? m.geometry.toNonIndexed() : m.geometry.clone();
      for (const name of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(name)) g.deleteAttribute(name);
      if (!g.attributes.uv) g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
      if (!g.attributes.normal) g.computeVertexNormals();
      g.applyMatrix4(m.matrix);
      geos.push(g);
    }
    const merged = mergeGeometries(geos, false);
    if (!merged) continue;
    for (const m of list) group.remove(m);
    const mesh = new THREE.Mesh(merged, mat);
    mesh.renderOrder = list[0].renderOrder;
    group.add(mesh);
  }
  return group;
}
