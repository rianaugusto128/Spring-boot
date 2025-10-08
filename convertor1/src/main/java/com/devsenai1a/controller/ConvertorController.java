package com.devsenai1a.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/converter")
@CrossOrigin(origins = {"http://localhost:5501", "http://127.0.0.1:5501"})
public class ConvertorController {

    @PostMapping
    public Map<String, Object> converter(
            @RequestParam double valor,
            @RequestParam String de,
            @RequestParam String para) {

        Map<String, Object> resposta = new HashMap<>();

        try {
            double resultado;

            if (de.equals(para)) {
                resultado = valor;
            } else if (de.equals("celsius") && para.equals("fahrenheit")) {
                resultado = (valor * 9 / 5) + 32;
            } else if (de.equals("celsius") && para.equals("kelvin")) {
                resultado = valor + 273.15;
            } else if (de.equals("fahrenheit") && para.equals("celsius")) {
                resultado = (valor - 32) * 5 / 9;
            } else if (de.equals("fahrenheit") && para.equals("kelvin")) {
                resultado = (valor - 32) * 5 / 9 + 273.15;
            } else if (de.equals("kelvin") && para.equals("celsius")) {
                resultado = valor - 273.15;
            } else if (de.equals("kelvin") && para.equals("fahrenheit")) {
                resultado = (valor - 273.15) * 9 / 5 + 32;
            } else {
                throw new IllegalArgumentException("Conversão inválida");
            }

            resposta.put("resultado", resultado);
        } catch (Exception e) {
            resposta.put("erro", e.getMessage());
        }

        return resposta;
    }
}
