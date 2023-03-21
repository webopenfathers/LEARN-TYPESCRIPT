import { sum } from './utils/math';
import axios from 'axios';
import type { AxiosRequestConfig, AxiosInstance } from 'axios'
import React from 'react'
import _ from 'loadsh'


const message: string = 'Hello Word';

console.log(message.length, message);

console.log(sum(20, 30));


// lib.dom.d.ts
const h2El = document.createElement('h2')
h2El.textContent = 'Hello TypeScript'
document.body.append(h2El)

// lib.es2015.d.ts
const promise = new Promise((resolve, reject) => { })

// axios

// loadsh
console.log(_.join(['abc', 'cba']));

