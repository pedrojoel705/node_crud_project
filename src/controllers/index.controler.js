const ctrlRoute = {};


ctrlRoute.renderIndex=(req,res)=>{
    res.render('index');  // render the index page
}

ctrlRoute.renderAbout=(req,res)=>{
    res.render('about');  // render the about page
}

module.exports=ctrlRoute