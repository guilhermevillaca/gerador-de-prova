package br.com.villaca.prova.service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class StringToSHA256 {

    public static String toSHA256(String input) {
        try {
            // Obter uma instância de MessageDigest para SHA-256
            MessageDigest digest = MessageDigest.getInstance("SHA-256");

            // Gerar o hash como um array de bytes
            byte[] hashBytes = digest.digest(input.getBytes());

            // Converter os bytes para uma string hexadecimal
            StringBuilder hexString = new StringBuilder();
            for (byte b : hashBytes) {
                String hex = Integer.toHexString(0xff & b);
                if (hex.length() == 1) {
                    hexString.append('0');
                }
                hexString.append(hex);
            }
            return hexString.toString();

        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("Erro ao calcular o hash SHA-256", e);
        }
    }
    
}
