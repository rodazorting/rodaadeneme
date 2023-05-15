export default async(req, res) => { 
    const project = [
        
        {
            "name": "My Website",
            "link": "https://cdn.discordapp.com/attachments/771804217890701333/1098660692053200927/image.png",
            "description": "",
            "html_url": "https://www.darw1n.live"
        },

        

    ]
    res.status(200).json(project)
}
