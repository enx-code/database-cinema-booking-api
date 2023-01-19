const { Prisma } = require("@prisma/client");
const prisma = require("../utils/prisma");
const { json } = require("express");

const getAllMovies = async (req, res) => {
    const movies = await prisma.movie.findMany([])
    res.json({
        data: movies
    })
}

module.exports = {
    getAllMovies
}