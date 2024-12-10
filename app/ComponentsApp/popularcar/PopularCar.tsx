import React from 'react'
import Card from '../Card'

function PopularCar() {
  return (
    <main className='w-full  my-10 justify-center items-center'>
        <div className='w-full flex-col justify-center items-center gap-3'>
            <div className='flex px-14 mb-6 justify-between items-center '>
                <h3 className='text-[#90A3BF] text-base font-semibold'>Popular Car</h3>
                <span className='text-base text-[#3563E9] font-semibold'>View All</span>
            </div>
              <div className='flex flex-wrap justify-center items-center gap-3'>
                  <Card
                      name='Koenigsegg'
                      type='Sport'
                      image='/pc1.png'
                      fuel='90L'
                      transmission='Manual'
                      capacity='2 People'
                      rent='$99.00'
                      rentDetail='day'
                  />

                  <Card
                      name='Nissan GT - R'
                      type='Sport'
                      image='/pc2.png'
                      fuel='80L'
                      transmission='Manual'
                      capacity='2 People'
                      rent='$80.00'
                      rentDetail='day'
                  />

                  <Card
                      name='Rolls - Royce'
                      type='Sedan'
                      image='/pc3.png'
                      fuel='70L'
                      transmission='Manual'
                      capacity='2 People'
                      rent='$96.00'
                      rentDetail='day'
                  />

                  <Card
                      name='Nissan GT - R'
                      type='Sport'
                      image='/pc2.png'
                      fuel='80L'
                      transmission='Manual'
                      capacity='2 People'
                      rent='$80.00'
                      rentDetail='day'
                  />
              </div>
        </div>
    </main>
  )
}

export default PopularCar