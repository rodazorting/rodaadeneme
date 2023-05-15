export default async(req, res) => { 
    const techs = [
        {
            "name": "HTML",
            "src": "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
        },
        {
            "name": "Lua",
            "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg",
        },
        {
            "name": "C#",
            "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        },
        {
            "name": "C++",
            "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        },
        {
            "name": "JavaScript",
            "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
            "name": "Python",
            "src": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
    ]
    res.status(200).json(techs)
}
