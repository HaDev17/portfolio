import React from 'react'
import PublicationItem from './PublicationItem'
function Publications() {
  return (
    <div className='publications'>
      <h4>PUBLICATIONS</h4>
      <div className='pub-content row justify-content-center'>
        <div className='pub-line'></div>
        <div className='row p-0'>
          <PublicationItem title='Symbol-pair weight distribution of some irreducible cyclic codes.' authors='Youcef Maouche' info='Cryptography and Communications  15(1) 209-220 (2023)' />
          <PublicationItem title='Some New Results on Dimension and Bose Distance for Various Classes of BCH Codes' authors=' Ahmed Cherchem, Abdelillah Jamous, Hongwei Liu, Youcef Maouche' info='Finite Fields and Their Applications 65 1071-5797 (2020).' />
          <PublicationItem title='Two or Few-Weight Trace Codes over' code = 'F_q +uF_q' authors='Hongwei Liu, Youcef Maouche' info='IEEE Trans. Information Theory 65(5) 2696-2703 (2019).' />
          <PublicationItem title='Several new classes of linear codes with few weights' authors='Hongwei Liu, Youcef Maouche' info='Cryptography and Communications 11(2) 137-146 (2018).' />
          <PublicationItem title='Some Repeated-Root  Constacyclic Codes Over Galois Rings.' authors='Hongwei Liu, Youcef Maouche' info='IEEE Trans. Information Theory 63(10) 6247-6255 (2017).' />
          <PublicationItem title=' A Note on Hamming distance of constacyclic codes of length p^s over' code='F_{p^m} +uF_{p^m}' authors='Hongwei Liu, Youcef Maouche' info='arXiv:1612.03731 (2016).' />
        </div>
    </div>
    </div>
  )
}

export default Publications