import prisma from "@/lib/prisma/prisma";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });
    if (!result) {
      const { email, password, name, role } = body;
      const hashedPassword = await bcrypt.hash(password, 12);

      const data = await prisma.user.create({
        data: {
          email: email,
          password: hashedPassword,
          name: name,
          role: role,
        },
      });
      return NextResponse.json(
        { message: "Account created succesfully" },
        { status: 200 }
      );
    }
    return NextResponse.json(
      { message: "Account already exists" },
      { status: 409 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
