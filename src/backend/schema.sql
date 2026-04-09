CREATE TABLE usuarios_test (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    matricula INT NOT NULL,
    carrera VARCHAR(50),
    resultado_ansiedad VARCHAR(30), 
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
