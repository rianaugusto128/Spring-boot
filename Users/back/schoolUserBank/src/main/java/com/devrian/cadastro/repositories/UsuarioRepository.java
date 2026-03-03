package com.devrian.cadastro.repositories;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.devrian.cadastro.entities.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findByEmail(String email);

}