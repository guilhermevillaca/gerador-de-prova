package br.com.villaca.prova.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import java.security.Key;
import java.security.SignatureException;
import java.util.Date;

import javax.crypto.spec.SecretKeySpec;

public class JwtUtil {

    private static final Key SECRET_KEY = Keys.hmacShaKeyFor(Oauth.CLIENT_SECRET.getBytes());

    public static String generateToken(String login) {
        long expirationTime = Long.parseLong(Oauth.JWT_TIMEOUT_SECONDS) * 1000; // em milissegundos
        return Jwts.builder()
                .setSubject(login)
                .setIssuer(Oauth.DOMAIN)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expirationTime))
                .signWith(SECRET_KEY, SignatureAlgorithm.HS256)
                .compact();
    }

    // Converte a chave secreta de String para Key
    private static Key getSigningKey(String secret) {
        byte[] keyBytes = secret.getBytes();
        return new SecretKeySpec(keyBytes, SignatureAlgorithm.HS256.getJcaName());
    }

    public static boolean validateToken(String token) {

        try {
            // Gera a chave usando o método getSigningKey
            Key signingKey = getSigningKey(Oauth.CLIENT_SECRET);
    
            // Usa parserBuilder e define a chave como um objeto Key
            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(signingKey)
                    .build()
                    .parseClaimsJws(token)
                    .getBody();
    
            // Verifica a expiração do token
            if (claims.getExpiration().before(new Date())) {
                System.out.println("Token expirado.");
                return false;
            }
    
            return true; // Token válido
        } catch (Exception e) {
            System.out.println("Erro ao validar o token: " + e.getMessage());
            return false;
        }
       
    }

    public static String getUsernameFromToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(SECRET_KEY)
                .build()
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

}
