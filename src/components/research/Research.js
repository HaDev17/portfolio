import React from 'react'
import Education from './Education'
import Publications from './Publications'
import './Research.css'

function Research() {
  return (
    <div className='research py-4' id='research'>
      <h3 className='my-4 px-4 pb-2'>RESEARCH INTERESTS</h3>
      <div className='research-content px-4'>
        <p>
          My main research interest is Algebraic coding theory and related area. I have done some research on codes over finite rings, finite chain rings, and finite fields.<br /><br />

          My second research interest is Cryptography and algorithm complexity. I have a good knowledge on symmetric (DES, AES,...) and asymmetric (RSA, ECC,...) cryptosystems. I also have a good knowledge on number theory and its algorithmic complexity such as primality tests, factorization algorithms (Quadratic sieve, Number field sieve, elliptic curve factorization,...).
        </p>
        <Education />
        <Publications />
      </div>
    </div>
  )
}

export default Research