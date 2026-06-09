// src/controllers/categoryController.ts
import type { Request, Response } from "express";
import { prisma } from "../lib/db.js";

// 1. GET ALL
export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { id: "asc" },
    });

    return res.status(200).json({
      message: "Berhasil mengambil data kategori.",
      data: categories,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Gagal mengambil data kategori.",
      error: error instanceof Error ? error.message : error,
    });
  }
};

// 2. GET BY ID
export const getCategoryById = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID tidak valid." });
  }

  try {
    const category = await prisma.category.findUnique({
      where: { id },
    });

    if (!category) {
      return res.status(404).json({ message: "Category tidak ditemukan." });
    }

    return res.status(200).json({
      message: "Berhasil mengambil data kategori.",
      data: category,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Gagal mengambil data kategori.",
      error: error instanceof Error ? error.message : error,
    });
  }
};

// 3. CREATE
export const createCategory = async (req: Request, res: Response) => {
  try {
    const { nama } = req.body as { nama?: string };

    if (!nama) {
      return res.status(400).json({ message: "Nama wajib diisi." });
    }

    const newCategory = await prisma.category.create({
      data: { nama },
    });

    return res.status(201).json({
      message: "Berhasil membuat kategori.",
      data: newCategory,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Gagal membuat kategori.",
      error: error instanceof Error ? error.message : error,
    });
  }
};

// 4. UPDATE
export const updateCategory = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID tidak valid." });
  }

  try {
    const { nama } = req.body as { nama?: string };

    const updatedCategory = await prisma.category.update({
      where: { id },
      data: {
        ...(nama !== undefined && { nama }),
      },
    });

    return res.status(200).json({
      message: "Berhasil memperbarui kategori.",
      data: updatedCategory,
    });
    
  } catch (error: any) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Category tidak ditemukan." });
    }
    return res.status(500).json({
      message: "Gagal memperbarui kategori.",
      error: error instanceof Error ? error.message : error,
    });
  }
};

// 5. DELETE
export const deleteCategory = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({ message: "ID tidak valid." });
  }

  try {
    const deleted = await prisma.category.delete({
      where: { id },
    });

    return res.status(200).json({
      message: "Category berhasil dihapus.",
      data: deleted,
    });
  } catch (error: any) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Category tidak ditemukan." });
    }
    return res.status(500).json({
      message: "Gagal menghapus kategori.",
      error: error instanceof Error ? error.message : error,
    });
  }
  //by fatih
};