-- CreateEnum
CREATE TYPE "Operators" AS ENUM ('OP_PLUS', 'OP_MINUS', 'OP_DIV', 'OP_MULT');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Calculation" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,
    "first_operand" DOUBLE PRECISION NOT NULL,
    "second_operand" DOUBLE PRECISION,
    "operator" "Operators" NOT NULL,

    CONSTRAINT "Calculation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Calculation" ADD CONSTRAINT "Calculation_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
