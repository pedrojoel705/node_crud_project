const ctrlRoute = {};


ctrlRoute.renderIndex=(req,res)=>{
    res.render('index');  // render the index page
}

ctrlRoute.renderAbout=(req,res)=>{
    res.render('about');  // render the about page
}

ctrlRoute.renderRegistrer=(req,res)=>{
    res.render('registrer')
}

ctrlRoute.renderLogin=(req,res)=>{
    res.render('login')
}

module.exports=ctrlRoute