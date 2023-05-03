package com.example.healthclub.service;

import com.example.healthclub.entity.Login;
import com.example.healthclub.repo.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;
@Repository
public class LoginService implements LoginRepository {
    @Autowired
    LoginRepository loginRepository;

    public String addUser(String uName,String pass,String uType) {


        loginRepository.save(new Login(uName, pass, uType));

        //loginRepository.findAll().forEach(item -> System.out.println(getItemDetails(item)));

        return " added user";

    }

    public String getItemDetails(Login item) {

        System.out.println(
                "Item Name: " + item.getUserName() +
                        ", \nQuantity: " + item.getPassword() +
                        ", \nItem Category: " + item.getUserType()
        );

        return "";
    }



    @Override
    public Login findUserByName(String name) {
        System.out.println("name*******"+name);
        return loginRepository.findUserByName(name);
    }

    @Override
    public long count() {
        return 0;
    }

    @Override
    public void deleteById(String s) {

    }

    @Override
    public void delete(Login entity) {

    }

    @Override
    public void deleteAllById(Iterable<? extends String> strings) {

    }

    @Override
    public void deleteAll(Iterable<? extends Login> entities) {

    }

    @Override
    public void deleteAll() {

    }

    @Override
    public <S extends Login> S insert(S entity) {
        return null;
    }

    @Override
    public <S extends Login> List<S> insert(Iterable<S> entities) {
        return null;
    }

    @Override
    public <S extends Login> Optional<S> findOne(Example<S> example) {
        return Optional.empty();
    }

    @Override
    public <S extends Login> List<S> findAll(Example<S> example) {
        return null;
    }

    @Override
    public <S extends Login> List<S> findAll(Example<S> example, Sort sort) {
        return null;
    }

    @Override
    public <S extends Login> Page<S> findAll(Example<S> example, Pageable pageable) {
        return null;
    }

    @Override
    public <S extends Login> long count(Example<S> example) {
        return 0;
    }

    @Override
    public <S extends Login> boolean exists(Example<S> example) {
        return false;
    }

    @Override
    public <S extends Login, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return null;
    }

    @Override
    public <S extends Login> S save(S entity) {
        return null;
    }

    @Override
    public <S extends Login> List<S> saveAll(Iterable<S> entities) {
        return null;
    }

    @Override
    public Optional<Login> findById(String s) {
        return Optional.empty();
    }

    @Override
    public boolean existsById(String s) {
        return false;
    }

    @Override
    public List<Login> findAll() {
        return null;
    }

    @Override
    public List<Login> findAllById(Iterable<String> strings) {
        return null;
    }

    @Override
    public List<Login> findAll(Sort sort) {
        return null;
    }

    @Override
    public Page<Login> findAll(Pageable pageable) {
        return null;
    }
}
