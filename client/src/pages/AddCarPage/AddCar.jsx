import React, { useState } from 'react';
import './AddCar.css';

const AddCar = () => {

    const [car, setCar] = useState({
        dealer_id: '',
        car: '',
        KMs_on_odometer: '',
        major_scratches: '',
        original_paint: '',
        number_of_accidents_reported: '',
        number_of_previous_buyers: '',
        registration_place: '',
        image: '',
        title: '',
    });
    const handleInputChange = (event) => {
        setCar({
            ...car,
            [event.target.name]: event.target.value
        });
    }

    const handleFileChange = (event) => {
        setCar({
            ...car,
            image: event.target.files[0],
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

  return (
    <>
        <div className="addCar">
            <div className='leftSide'>
                <img src="https://img.freepik.com/premium-vector/vehicle-insurance-illustration-car-travel-safety-accident-financial-auto-insurance-poster_432516-682.jpg?w=996" alt="" />
            </div>
            <div className='rightSide'>
                <h1>Add Car</h1>
                <form className='addCarForm' onSubmit={handleSubmit}>
                
                <label>
                    Title:
                    <input type="text" name="title" onChange={handleInputChange} />
                </label>
                <label>
                    KMs on Odometer:
                    <input type="number" name="KMs_on_odometer" onChange={handleInputChange} />
                </label>
                <label>
                    Major Scratches:
                    <div>
                        <input type="radio" name="major_scratches" value="true" onChange={handleInputChange} />
                        <label>Yes</label>
                    </div>
                    <div>
                        <input type="radio" name="major_scratches" value="false" onChange={handleInputChange} />
                        <label>No</label>
                    </div>
                </label>
                <label>
                    Original Paint:
                    <div>
                        <input type="radio" name="original_paint" value="true" onChange={handleInputChange} />
                        <label>Yes</label>
                    </div>
                    <div>
                        <input type="radio" name="original_paint" value="false" onChange={handleInputChange} />
                        <label>No</label>
                    </div>
                </label>
                <label>
                    Number of Accidents:
                    <input type="number" name="number_of_accidents_reported" onChange={handleInputChange} />
                </label>
                <label>
                    Number of Previous Buyers:
                    <input type="number" name="number_of_previous_buyers" onChange={handleInputChange} />
                </label>
                <label>
                    Registration Place:
                    <input type="text" name="registration_place" onChange={handleInputChange} />
                </label>
                <label>
                    Image:
                    <input type="file" name="image" onChange={handleFileChange} />
                </label>
                
                <button type="submit">Add Car</button>
                </form>
            </div>
        </div>

    </>
  )
}

export default AddCar