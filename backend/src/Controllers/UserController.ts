import type { Request, Response } from "express";
import { prisma } from "../lib/db.js";
import bcrypt from "bcrypt";

// 1. GET ALL
export const getAllUser = async (req: Request, res: Response) => {
  try {
    const data = await prisma.users.findMany({
      orderBy: { id: "asc" },
    });

    return res.status(200).json({
      message: "Berhasil mengambil data users.",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Gagal mengambil data users.",
      error: error instanceof Error ? error.message : error,
    });
  }
};

// 2. GET BY ID
export const getUserById = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = await prisma.users.findUnique({
      where: { id },
    });

    if (!data) {
      return res.status(404).json({
        message: "User tidak ditemukan.",
      });
    }

    return res.status(200).json({
      message: "Berhasil mengambil data user.",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Gagal mengambil data user.",
      error: error instanceof Error ? error.message : error,
    });
  }
};

// 3. CREATE
export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, password, foto } = req.body as {
      username?: string;
      password?: string;
      foto?: string;
    };

    if (!username || !password) {
      return res.status(400).json({ message: "Username dan password wajib diisi." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const data = await prisma.users.create({
      data: {
        username: username,
        password: hashedPassword,
        foto: foto || "",
      },
    });

    return res.status(201).json({
      message: "Berhasil membuat user baru.",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Gagal membuat user baru.",
      error: error instanceof Error ? error.message : error,
    });
  }
};

// 4. DELETE
export const deleteUser = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const id = Number(req.params.id);
    await prisma.users.delete({
      where: { id },
    });

    return res.status(200).json({
      message: "Berhasil menghapus user.",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Gagal menghapus user.",
      error: error instanceof Error ? error.message : error,
    });
  }
};

// 5. UPDATE
export const updateUser = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { username, password, foto } = req.body as {
      username?: string;
      password?: string;
      foto?: string;
    };

    const existingUser = await prisma.users.findUnique({
      where: { id },
    });

    if (!existingUser) {
      return res.status(404).json({
        message: "User tidak ditemukan.",
      });
    }

    const updateData: {
      username?: string;
      password?: string;
      foto?: string;
    } = {};

    if (username) updateData.username = username;
    if (password) updateData.password = await bcrypt.hash(password, 10);
    if (foto !== undefined) updateData.foto = foto;

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        message: "Tidak ada data untuk diperbarui.",
      });
    }

    const data = await prisma.users.update({
      where: { id },
      data: updateData,
    });

    return res.status(200).json({
      message: "Berhasil memperbarui user.",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Gagal memperbarui user.",
      error: error instanceof Error ? error.message : error,
    });
  }
};