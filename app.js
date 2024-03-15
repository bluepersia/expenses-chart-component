
let json;
async function fetchJSONAndDisplay () 
{
    const res = await fetch ('./data.json');

    if (!res.ok)
        throw new Error ('Something went wrong!');

    json = await res.json ();

    displayChart ();
}


function displayChart ()
{
    if (!json)
        return;

    let highestVal = 0;
    let highestEl;
    json.forEach (el => 
        {
            const bar = document.querySelector (`.card_${el.day}`);
            const inner = bar.querySelector ('.card_bar_inner');
            inner.style.height = `${el.amount * 0.15}em`;

            if (el.amount > highestVal)
            {
                highestVal = el.amount;
                highestEl = inner;
            }
        });

    highestEl.classList.add ('highest');
}


fetchJSONAndDisplay ();