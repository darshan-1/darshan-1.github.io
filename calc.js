var product_total_amt = document.getElementById('product_total_amt');
var shipping_charge = document.getElementById('shipping_charge');
var total_cart_amt = document.getElementById('total_cart_amt');
var discountCode = document.getElementById('discount_code1');
let discount_code_applied= false;

const decreaseNumber = (incdec, itemprice) => {
   
    

    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
   
    console.log(itemprice.innerHTML);
    // console.log(itemval.value);
    if (itemval.value <= 0.00) {
        total_cart_amt.innerHTML =0;
        itemval.value = 0.00;
        
        alert('Negative quantity not allowed');
       

    } 
    
    
    else {
        error_trw.innerHTML = "Enter valid code and Click on Apply 👇";
        discount_code_applied=false;
        itemval.value = parseInt(itemval.value) - 1;
        itemval.style.background = '#fff';
        itemval.style.color = '#000';
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - 100;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - 100;
    
    
            total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
    
        
    
    
    }
    
}
const increaseNumber = (incdec, itemprice) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    // console.log(itemval.value);
    if (itemval.value >= 5) {
        itemval.value = 5;
        alert('max 5 allowed');
        itemval.style.background = 'red';
        itemval.style.color = '#fff';
    }
        
        else {
            discount_code_applied=false;
            error_trw.innerHTML = "Enter valid code and Click on Apply 👇";
        itemval.value = parseInt(itemval.value) + 1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + 100;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + 100;
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);

        }
        
    

}

    
    const discount_code = () => {
    
   
       
        let totalamtcurr = parseInt(total_cart_amt.innerHTML);
        let currproduct_total_amt= parseInt(product_total_amt.innerHTML);
        let error_trw = document.getElementById('error_trw');
        if (discountCode.value === 'GetGreen' && !discount_code_applied) {
            if((currproduct_total_amt)>100)
            {
                let newtotalamt = totalamtcurr - ((20 * totalamtcurr) / 100);
                total_cart_amt.innerHTML = newtotalamt;
                error_trw.innerHTML = "Awesome Blossom";
                discount_code_applied=true;

            }
           else{
            error_trw.innerHTML = "Minimum cart Value 101";
            document.getElementById("discount_code1").value="";
            
           }
           
            
           
        }
       else if (discountCode.value === 'FIRSTBUY' && !discount_code_applied) {
            
                let newtotalamt = totalamtcurr - ((20 * totalamtcurr) / 100);
                total_cart_amt.innerHTML = newtotalamt;
                error_trw.innerHTML = "Awesome Blossom-FIRSTBUY";
                discount_code_applied=true; 
           
        }
        else if(discount_code_applied){
            error_trw.innerHTML = "Already Applied";
        }
        else 
        {
            error_trw.innerHTML = "Invalid Cupon Used";
        }
        
    }
    function clearFunc()
	{
		document.getElementById("discount_code1").value="";
		
    }
    
  
    
  
       
        
        



  
  

