import { BASE_IMAGE_PATH } from "@api/constants";

export const getBaseImageUrl = (imageName: string) =>
  `${BASE_IMAGE_PATH}/${imageName}`;
