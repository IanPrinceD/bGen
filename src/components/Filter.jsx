import React from 'react'
import { FilterLaptop } from './Productlist'
import { FilterProcessor } from './Productlist'
import { FilterPowerSupply } from './Productlist'
import { FilterMotherboard } from './Productlist'
import { FilterCoolingSystem } from './Productlist'
import { FilterSSD } from './Productlist'
import { FilterHDD } from './Productlist'
import { FilterRAM } from './Productlist'
import { FilterGPU } from './Productlist'
import { FilterDiscount } from './Productlist'
import { FilterRating } from './Productlist'
import '../css/Product.css'
import '../css/Filter.css'

// Codes for mapping
const Filter = () => {
  return (
    <>
    <section className='laptopContainer'>
      <h3>LAPTOP</h3>
      {FilterLaptop.map((laptop) =>{
      return <LaptopBox laptop={laptop} key={laptop.Category}/>
    })}
    </section>
    <section className="processorContainer">
      <h3>PROCESSOR TYPE</h3>
      {FilterProcessor.map((processor) =>{
        return <ProcessorBox processor={processor} key={processor.Category}/>
      })}
    </section>
    <section className="powerSupplyContainer">
      <h3>POWER SUPPLY</h3>
      {FilterPowerSupply.map((powerSupply) =>{
        return <PowerSupplyBox powerSupply={powerSupply} key={powerSupply.Category}/>
      })}
    </section>
    <section className="motherboardContainer">
      <h3>MOTHERBOARD</h3>
      {FilterMotherboard.map((motherboard) =>{
        return <MotherboardBox motherboard={motherboard} key={motherboard.Category}/>
      })}
    </section>
    <section className="coolingSystemContainer">
      <h3>COOLING SYSTEM</h3>
      {FilterCoolingSystem.map((coolingSystem) =>{
        return <CoolingSystemBox coolingSystem={coolingSystem} key={coolingSystem.Category}/>
      })}
    </section>
    <section className="SSDContainer">
      <h3>SSD</h3>
      {FilterSSD.map((ssd) =>{
        return <SSDBox ssd={ssd} key={ssd.Category}/>
      })}
    </section>
    <section className="HDDContainer">
      <h3>HDD</h3>
      {FilterHDD.map((hdd) =>{
        return <HDDBox hdd={hdd} key={hdd.Category}/>
      })}
    </section>
    <section className="RAMContainer">
      <h3>RAM</h3>
      {FilterRAM.map((ram) =>{
        return <RAMBox ram={ram} key={ram.Category}/>
      })}
    </section>
    <section className="GPUContainer">
      <h3>GPU</h3>
      {FilterGPU.map((gpu) =>{
        return <GPUBox gpu={gpu} key={gpu.Category}/>
      })}
    </section>
    <section className="DiscountContainer">
      <h3>DISCOUNT</h3>
      {FilterDiscount.map((discount) =>{
        return <DiscountBox discount={discount} key={discount.Category}/>
      })}
    </section>
    <section className="RatingContainer">
      <h3>RATINGS</h3>
      {FilterRating.map((rating) =>{
        return <RatingBox rating={rating} key={rating.Category}/>
      })}
    </section>
    </>
  )
}

// Codes for props
const LaptopBox = ({laptop: {Brand}}) =>{
  return (
    <>
    <section className="filLaptop">
      <input type="checkbox" />
      <label htmlFor="">{Brand}</label>
    </section>
    </>
  )
}
const ProcessorBox = ({processor: {Brand}}) =>{
  return (
    <>
    <section className="filProcessor">
      <input type="checkbox" />
      <label htmlFor="">{Brand}</label>
    </section>
    </>
  )
}
const PowerSupplyBox = ({powerSupply: {Brand}}) =>{
  return (
    <>
    <section className="filPowerSupply">
      <input type="checkbox" />
      <label htmlFor="">{Brand}</label>
    </section>
    </>
  )
}
const MotherboardBox = ({motherboard: {Brand}}) =>{
  return (
    <>
    <section className="filMotherboard">
      <input type="checkbox" />
      <label htmlFor="">{Brand}</label>
    </section>
    </>
  )
}
const CoolingSystemBox = ({coolingSystem: {Brand}}) =>{
  return (
    <>
    <section className="filCoolingSystem">
      <input type="checkbox" />
      <label htmlFor="">{Brand}</label>
    </section>
    </>
  )
}
const SSDBox = ({ssd: {Brand}}) =>{
  return (
    <>
    <section className="filSSD">
      <input type="checkbox" />
      <label htmlFor="">{Brand}</label>
    </section>
    </>
  )
}
const HDDBox = ({hdd: {Brand}}) =>{
  return (
    <>
    <section className="filHDD">
      <input type="checkbox" />
      <label htmlFor="">{Brand}</label>
    </section>
    </>
  )
}
const RAMBox = ({ram: {Brand}}) =>{
  return (
    <>
    <section className="filRAM">
      <input type="checkbox" />
      <label htmlFor="">{Brand}</label>
    </section>
    </>
  )
}
const GPUBox = ({gpu: {Brand}}) =>{
  return (
    <>
    <section className="filGPU">
      <input type="checkbox" />
      <label htmlFor="">{Brand}</label>
    </section>
    </>
  )
}
const DiscountBox = ({discount: {Discount}}) =>{
  return (
    <>
    <section className="filDiscount">
      <input type="checkbox" />
      <label htmlFor="">{Discount}</label>
    </section>
    </>
  )
}
const RatingBox = ({rating: {Rating}}) =>{
  return (
    <>
    <section className="filRating">
      <input type="checkbox" />
      <label htmlFor="">{Rating}</label>
    </section>
    </>
  )
}
export default Filter