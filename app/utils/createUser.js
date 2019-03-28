#!/usr/bin/env node
const bcrypt = require('bcrypt');
const saltRounds = 10;

const { createUser } = require('./../models/user');

async function create() {
  try {
    const username = process.argv[2];
    const password = process.argv[3];
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log(`Creating user with credentials: username: ${username}, password: ${hashedPassword}`);
    await createUser(username, hashedPassword);
    console.log('User created');
  } catch (serverError) {
    console.log(serverError, 'Error on create(user) request');
  }
}

create();
