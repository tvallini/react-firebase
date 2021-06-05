fetch('https://veterinaryfs-back.vercel.app/owners')
  .then( response => response.json() )
  .then( json => console.log(json) )

