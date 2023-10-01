const mongoose = require("mongoose");
const { mongoURI: db } = require('../config/keys.js');
const User = require('../models/User');
const Tweet = require('../models/Tweet');
const bcrypt = require('bcryptjs');
const { faker } = require('@faker-js/faker');