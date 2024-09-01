import { NextApiRequest, NextApiResponse } from 'next';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { NextRequest } from 'next/server';

export const validateBody = async (data: any, dtoClass: any) => {
  const dto = plainToInstance(dtoClass, data);
  const errors = await validate(dto);

  if (errors.length > 0) {
    const formattedErrors = errors.map((error) => ({
      field: error.property,
      constraints: error.constraints,
    }));
    return formattedErrors;
  }

  return null;
};
