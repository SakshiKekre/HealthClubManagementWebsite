//package com.example.healthclub;
//
//import io.jsonwebtoken.*;
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import org.springframework.http.HttpHeaders;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import java.io.IOException;
//
//public class JwtAuthenticationFilter extends OncePerRequestFilter {
//
//    private final String TOKEN_PREFIX = "Bearer ";
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
//            throws ServletException, IOException {
//
//        String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
//
//        if (authorizationHeader != null && authorizationHeader.startsWith(TOKEN_PREFIX)) {
//            String jwtToken = authorizationHeader.substring(TOKEN_PREFIX.length());
//            try {
//                JwtParser parser = Jwts.parser().setSigningKey("chinmayi");
//                Jws<Claims> claims = parser.parseClaimsJws(jwtToken);
//                String username = claims.getBody().getSubject();
//
//                // Perform any additional validation here
//
//                // Create authentication object
//                Authentication authentication = new UsernamePasswordAuthenticationToken(username, null, null);
//                SecurityContextHolder.getContext().setAuthentication(authentication);
//
//            } catch (JwtException ex) {
//                logger.error("Error validating JWT token", ex);
//            }
//        }
//
//        chain.doFilter(request, response);
//    }
//}
