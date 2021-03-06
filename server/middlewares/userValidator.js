import express from 'express';
import bodyParser from 'body-parser';

class userValidator {
  static validateFirstTimeUser(req, res, next) {
    const {
      username, email, phone, address, password,
    } = req.body;

    const responseMessage = (error, message) => res.status(400).json({ error, message });

    if (typeof username !== 'string') {
      return responseMessage('Invalid Request', 'Username has to be a string');
    }

    if (username.length === 0 || username === null) {
      return responseMessage('Invalid Request. Cannot be empty string or null', 'Username has to be a string');
    }

    if (username.trim().length === 0) {
      return responseMessage('Invalid Request. Cannot contain white space', 'Username has to be a string');
    }

    if (typeof email !== 'string') {
      return responseMessage('Invalid Request', 'Email has to be a string');
    }
    if (email.match(/\w+@\w+\.\w{2,6}/g) === null) {
      return responseMessage('Invalid Request', 'Enter email in the correct format');
    }
    if ((Number(phone) !== parseInt(phone, 10))) {
      return responseMessage('Invalid Request', 'Phone Number has to be a number');
    }
    if (typeof address !== 'string') {
      return responseMessage('Invalid Request', 'Address has to be a string');
    }
    if (address.length < 1 || address === null) {
      return responseMessage('Invalid Request', 'Address cannot be empty');
    }
    if (address.trim().length === 0) {
      return responseMessage('Invalid Request. Cannot contain white space', 'Address has to be a string');
    }

    if (typeof password !== 'string') {
      return responseMessage('Invalid Request', 'Password has to be a string');
    }

    if (password.length === 0 || password === null) {
      return responseMessage('Invalid Request', 'Password cannot be empty');
    }

    if (password.trim().length === 0) {
      return responseMessage('Invalid Request. Cannot contain white space', 'Password has to be a string');
    }
    return next();
  }

  static validateReturningUser(req, res, next) {
    const {
      email, password,
    } = req.body;

    const responseMessage = (error, message) => res.status(400).json({ error, message });
    if (typeof email !== 'string') {
      return responseMessage('Invalid Request', 'Email has to be a string');
    }

    if (email.match(/\w+@\w+\.\w{2,6}/g) === null) {
      return responseMessage('Invalid Request', 'Enter email in the correct format');
    }

    if (typeof password !== 'string') {
      return responseMessage('Invalid Request', 'Password has to be a string');
    }

    if (password.length === 0 || password === null) {
      return responseMessage('Invalid Request', 'Password cannot be empty');
    }
       
    if (password.trim().length === 0) {
      return responseMessage('Invalid Request. Cannot contain white space', 'Password has to be a string');
    }
    return next();
  }
}

export default userValidator;
