﻿using System;
namespace shofy.Areas.Admin.Helpers.Extensions
{
	public static class FileExtensions
	{

            public static bool CheckFileSize(this IFormFile file, int size)
            {
                return file.Length / 1024 < size;
            }
            public static bool CheckFileType(this IFormFile file, string pattern)
            {
                return file.ContentType.Contains(pattern);
            }
            public async static Task SaveFileToLocalAsync(this IFormFile file, string path)
            {
                using (var stream = new FileStream(path, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }
            }

            public static void DeleteFileFromLocal(this string path)
            {
                if (File.Exists(path))
                {
                    File.Delete(path);
                }
            }
        }
    }


