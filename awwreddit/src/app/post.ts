export interface Post 
{
    data:
    {
        title:string;
        thumbnail:string;
        url_overridden_by_dest:string;
    }
}

//Create an Interface for a single result—at a minimum, a title, image, and link for each post. 

export interface ParentPost
{
    data:
    {
        children:Post[];
    }
}