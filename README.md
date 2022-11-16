## This is a quick Multivariate Calculus Demo I made for my project presentation, intended to show off the spherical coordinate system
Note, I'm using my teacher's annotation of the transformations in the context of phi and theta. Many switch their contexts around inverse to mine, such that theta is the 3D transform, and phi is the polar. In our class' notation, theta represents polar transform, and phi 3D transform: (r,φ,θ).

If you click the green cube, a [0, 0, 4] vector and 4 cubes spawn.
The white cube enables the visibility of the sphere which bounds the vector.
The yellow cube starts the phi (3D) transformation animation.
The orange cube starts the theta (2D/Polar) transformation animation. If the orange is clicked first, nothing happens. This is intended behavior, as the vector is centered around the origin.
The pink cube starts both phi and theta transformation animations simultaneously.
Once yellow & orange or pink are pressed, a green reset cube appears to reset the plane, replacing the cubes including the white one if you pressed it.

The code itself is rough and not my best work, I just coughed up a quick excuse to dive into react-three-fiber barely knowing threejs & fiber to write anything idiomatic yet. I intend to do a clean review of their documentations at a later date.