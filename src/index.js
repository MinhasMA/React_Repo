import React from 'react';
import ReactDom from 'react-dom';

function Book_List() 
{
    return (
    <section> 
        This is a Book List from Amazon.
            <h1>first div </h1>
            <h1> 
                bisram vs Teetu 
            </h1>       
            <ol>
                <li>
                layman of Sri Lanka 
                </li>
                <li>
                langda tyagi, tangdi kabab, butter masala
                </li>
                <li>
                tangdi kabab, butter masala
                </li>
                <li>
                murgh chokhani
                </li>
            </ol>
            <h3>
                bhosdi wale chacha
            </h3>
            
            <h3> lavde lakhanpal. machaye bawal. </h3> 
    </section> 
    ) ;
}
ReactDom.render(<Book_List />, document.getElementById('root'));
