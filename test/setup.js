require("dotenv").config();
const { expect } = require("chai");
//const { mocha } = require("mocha");
const supertest = require("supertest");

global.expect = expect;
global.supertest = supertest;
