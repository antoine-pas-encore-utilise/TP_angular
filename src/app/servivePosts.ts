
export class servivePosts{

    posts: [{  
    title: 'Mon premier post',  
    content: 'Yoyoyo ça va pas ou quoi',  
    loveIts: 10,  
    created_at: 'date'
    },
  {
    title: 'Mon second post',  
    content: 'ça va jte derange pas ?',  
    loveIts: 8,  
    created_at: 'Date'
  },
  {
    title: 'Mon dernier post',  
    content: "Mouahaha c'est quoi c'rafut ?",  
    loveIts: 6,  
    created_at: 'Date'
  }];

  getPost(){
    return this.posts;
}
      
}