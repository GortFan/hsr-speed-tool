import React, {useState, useContext} from 'react'
import classes from './InputField.module.css'
import {InputFieldContext} from '../Contexts/InputFieldContext'
///
import CharInput from './CharInput'
import EnemyInput from './EnemyInput'
///
export default function InputField(props){
  
  const [array, setArray] = useState(props.TurnOrder)
 
  const {form, setForm} = useContext(InputFieldContext)
  console.log(form)

        //Sorting array by AV
        function bubbleSort(editArray) {
          let i, j;
          let len = editArray.length;
        
          let isSwapped = false;
        
           for (i = 0; i < len; i++) {
        
              isSwapped = false;
        
              for (j = 0; j < len-1; j++) {
                  if (editArray[j].AV > editArray[j + 1].AV) {
                      let temp = editArray[j]
                      editArray[j] = editArray[j + 1];
                      editArray[j + 1] = temp;
                     isSwapped = true;
                  }
              }

              if (!isSwapped) {
                  break;
              }
          }
        
          setArray(editArray)
        }


        return (
          <div>
          {/* <h1>{form}</h1> */}
          {form.formType === 5 ? <EnemyInput/>:<></>}
          {form.formType === 1 || form.formType === 2 || form.formType === 3 || form.formType === 4 ? <CharInput/>:<></>}
          </div>
          );
      }
