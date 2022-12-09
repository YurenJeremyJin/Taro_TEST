import React from "react";

export default function Recipes() {


        return (
            <form id="recipes_form">
              <label>
                Name of your Drink: <br/>
                <input type="text" name="text" />
              </label>
              <br />
              <label>
                Tea <br/>
                <input type="text" name="text" />
              </label>
              <br />
              <label>
               Milk <br/>
                <input type="text" name="text" />
              </label>
              <br />
              <label>
                Flavours <br/>
                <input type="text" name="text" />
              </label>
              <br />
              <label>
                Ice <br/>
                <input type="text" name="text" />
              </label>
              <br />
              <label>
                Toppings <br/>
                <input type="text" name="text" />
              </label>
              <br />
              <label>
                Sweeteners <br/>
                <input type="text" name="text" />
              </label>
              <br /><br/>
              <button type="submit" id="submit_btn">Submit</button>
            </form>
          );
        }    