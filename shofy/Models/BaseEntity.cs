﻿using System;
namespace shofy.Models
{
	public abstract class BaseEntity
	{
		public int Id { get; set; }
		public bool SoftDeleted { get; set; }=false;
	}
}

